import { Temperature } from './SearchInput';
interface Props {
  tempArray: Temperature[]
  humidity: number | undefined
}

function ResultCard(props: Props) {
  const temperature = props.tempArray.map((temp: Temperature, index) => {
    return (
      <div key={index}>
      <label>{Object.keys(temp)[0]}</label>
      <span>{Object.values(temp)[0]}</span>
      <span>&#8451;</span>
    </div>
    )
  }
  )
  return (
    <div>
      {temperature}
      <div>
      <label>Humidity</label>
      <span>{props.humidity}</span>
      <span>%</span>
      </div>
    </div>
  );
}

export default ResultCard;