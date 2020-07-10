import React, {useEffect, useState, useMemo} from 'react';
import { Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import {format, addMinutes} from 'date-fns';
import assets from '@assets/index';
import { Container, Main, Logo, Info, Title, SubTitle, Card, Queue, Traveled, Section, LabelSection, DateSection, GreenDot, InfoQueue, Update, ExitQueue } from './styles'

const now = new Date();

const Home: React.FC = () => {
  const [minutesAwait, setMinutesAwait] = useState(60);
  const percent = useMemo(() => 100 - Math.floor(minutesAwait / 59 * 100 ), [minutesAwait]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutesAwait(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if(minutesAwait === 0){
      setMinutesAwait(59);
      Alert.alert('Ocorreu um erro', 'Estamos entrando na fila novamente')
    }
  }, [minutesAwait]);
  
  return (
    <Container>
      <Main>
        <Logo source={assets.logo}/>
        <Info>Login Caixa</Info>
        <Title>
          Você está numa sala de espera virtual.
        </Title>
        <SubTitle>
          Por favor, aguarde. Você logo poderá acessar o aplicativo.
        </SubTitle>
      <Card>
        <Queue>
        <Traveled percent={Number(percent)}>
        <LottieView
          source={assets.boxman}
          autoPlay
          style={{ width: 30, height: 30 }}
          resizeMode="cover"
          />
          </Traveled>
        </Queue>
        <Section>
          <LabelSection>
            Horário previsto para entrar no aplicativo:
          </LabelSection>
          <DateSection>
            {format(addMinutes(now, minutesAwait), 'HH:mm')}
          </DateSection>
        </Section>
        <Section>
          <LabelSection>
            Você poderá iniciar o Caixa Tem em:
          </LabelSection>
          <DateSection>
            {minutesAwait} minutos
          </DateSection>
        </Section>
        <GreenDot/>
        <InfoQueue>
          Você pode sair dessa página sem perder seu lugar na fila.
        </InfoQueue>
        <Update>
          Atualização: {format(now, 'HH:mm:ss')}
        </Update>
        </Card>
        <ExitQueue>Sair da fila</ExitQueue>
      </Main>
    </Container>
  );
}

export default Home;