import FieldCard from './FieldCard';
import './ResultCard.css';
interface Props {
  currentTemp: number
  maxTemp: number
  minTemp: number
  humidity: number
}

function ResultCard(props: Props) {
  return (
    <div id='result-card'>
      <FieldCard label='Current Temperature' value={props.currentTemp} symbol='deg'/>
      <FieldCard label='Minimum Temperature' value={props.minTemp} symbol='deg'/>
      <FieldCard label='Maximum Temperature' value={props.maxTemp} symbol='deg'/>
      <FieldCard label='Humidity' value={props.humidity}/>
    </div>
  );
}

export default ResultCard;