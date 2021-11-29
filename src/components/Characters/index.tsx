import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import api from '../../services/api';
import { ButtonMore, Card, CardList, Container, Name } from "./styles";
import { Header, Input, Buscar, Button, Row, Text } from "../index";
import logo from '../../assets/logo.jpg'

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Characters = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);
  const [chave, setChave] = useState("events");
  const [char, setChar] = useState('');
  const [isActive, setIsActive] = useState(true)


    useEffect(() => {
       api
        .get(`/${chave}`, {
          params: {
            limit: 49
          }
        })
        .then(response => {
          const newArr = response.data.data.results
          const novo = newArr.filter((item: { thumbnail: { path: string; }; }) => item.thumbnail.path.substring(44) !== "image_not_available")
          setCharacters(novo)
        })
        .catch(err => console.log(err));
      }, [chave])
    
    const handleMore = useCallback(async () => {
      try {
        const offset = characters.length;
        const response = await api.get(`${chave}`, {
          params: {
            offset,
            limit: 49
          },
        });
        const newArr = response.data.data.results
        const novo = newArr.filter((item: { thumbnail: { path: string; }; }) => item.thumbnail.path.substring(44) !== "image_not_available")
        setCharacters([...characters, ...novo]);
      } catch (err) {
        console.log(err)
      }
    }, [characters, chave])

    const handleCharacters = () => {
      setChave("characters")
    }

    const handleComics = () => {
      setChave("comics")
    }

    const handleEvents = () => {
      setChave("events")
    }

    const handleSeries = () => {
      setChave("series")
    }

    const handleStageButtons = useMemo(() => {
          return (
            <Fragment>
                <Button>
                  <Text fontSize="bodyExtraLarge" fontWeight="bold" onClick={handleCharacters}>Characters</Text>
                </Button>
                <Button>
                  <Text fontSize="bodyExtraLarge" fontWeight="bold" onClick={handleComics}>Comics</Text>
                </Button>
                <Button>
                  <Text fontSize="bodyExtraLarge" fontWeight="bold" onClick={handleEvents}>Events</Text>
                </Button>
                <Button>
                  <Text fontSize="bodyExtraLarge" fontWeight="bold" onClick={handleSeries}>Series</Text>
                </Button>
            </Fragment>
          )
    }, []);

    const handleSeach = () => {
      api
      .get(`/${chave}`, {
        params: {
          nameStartsWith: char,
          limit: 50,
        }
      })
      .then(response => {
        const newArr = response.data.data.results
          const novo = newArr.filter((item: { thumbnail: { path: string; }; }) => item.thumbnail.path.substring(44) !== "image_not_available")
          setCharacters(novo)
       // setCharacters(response.data.data.results)
      })
      .catch(err => console.log(err));
      setChar('')
      setIsActive(false)
      setChave('')
    }

    return (
     
      <Container>
        <Header>
          <img id="logo" src={logo} alt="Marvel" />
          <Row width="70%">
            {handleStageButtons}
          </Row>
          <Row>
            <Input
              placeholder="Informe o personagem"
              value={char}
              onChange={(e) => setChar(e.target.value)}
            />
            <Buscar onClick={handleSeach}>OK</Buscar>
          </Row>
          
        </Header>
        <CardList>
          {characters.map(person => {
            return (
              <Card key={person.id} thumbnail={person.thumbnail}>
                <div id="img" />
                <Name>{person.name}</Name>
                <p>{person.description}</p>
              </Card>
            )
          })}
          </CardList>
          {isActive ?  
          <ButtonMore onClick={handleMore} fontSize="bodyExtraLarge">
              Mais
          </ButtonMore> : null}
      </Container>
    )
    
};

export default Characters;
