import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

interface TravelProps {
  percent:number;
}

export const Container = styled.View`
   flex: 1;
    background: #195793;
`;

export const Main = styled.View`
  flex:1;
  background:#FFFFFF;
  
  align-items: center;
  justify-content: center;
  border-top-left-radius:16px;
  border-top-right-radius:16px;
  margin-top:50px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain'
})`
width:200px;
height:60px;
`;

export const Info = styled.Text`
color:#317C8C;
font-weight:600;
`;
export const Title = styled.Text`
color:#236892;
font-size:28px;
font-weight:bold;
margin: 0 15px;
text-align:center;
margin: 15px 8px;
`;
export const SubTitle = styled.Text`
color:#A1ABAF;
font-size:18px;
font-weight:bold;
margin: 15px;
text-align:center;
`;

export const Card = styled(LinearGradient).attrs({
  colors: ['#185EA5', '#55BAAB'],
  start: [0.0, 0.5],
  end: [1.0, 0.5],
  locations: [0.0, 1.0]
})`
border-radius:8px;
width:90%;
height:400px;
align-items:center;

`;
export const GreenDot = styled(LinearGradient).attrs({
  colors: ['#E8E5B3', '#748D38'],
})`
border-radius:8px;
width:16px;
height:16px;
margin: 16px 0;
`;

export const Queue = styled.View`
background:#fff;
width:80%;
margin:30px;
`;
export const Traveled = styled.View<TravelProps>`
background:#F2913D;
margin:5px 0 5px 5px;
min-width:10%;
width:${props => props.percent | 0}%;
align-items:flex-end;
`;


export const Section = styled.View`
flex-direction:row;
justify-content:space-around;
margin:0 30px;
border-bottom-width: 1px;
border-bottom-color: rgba(255,255,255,0.3);
padding:8px;
`;

export const LabelSection = styled.Text`
color:rgba(255,255,255,0.8);
font-size:18px;
font-weight:500;
width:70%;
`;

export const DateSection = styled.Text`
color:#FFFFFF;
font-size:18px;
font-weight:bold;
width:30%;
`;

export const InfoQueue = styled.Text`
color:rgba(255,255,255,0.8);
margin:0 30px;
text-align:center;
`;

export const Update = styled.Text`
color:#FFFFFF;
margin:30px;
font-size:16px;
`;

export const ExitQueue = styled.Text.attrs({
  textDecorationLine: 'underline line-through'
})`
color:#A1ABAF;
font-size:16px;
font-weight:600;

`;