import {Card} from 'react-bootstrap';

export function WeatherCard() {
    return <Card>
    <Card.Body className='card-body_left'>
      <div className="card__location">Moscow</div>
      <div className="card__date">Tue, 15 March, 14:18</div>
      <div className="card__temperature">-3</div>
      <div className="card-additional">
        <div className="card-additional__item"><div>По ощущениям</div> <div className="divider"></div> -3</div>
        <div className="card-additional__item"><span>Ветер</span> <div className="divider"></div> -3</div>
        <div className="card-additional__item"><span>Давление</span> <div className="divider"></div> -3</div>
        <div className="card-additional__item"><span>Влажность</span> <div className="divider"></div> -3</div>
        <div className="card-additional__item"><span>Г/м активность</span> <div className="divider"></div> -3</div>
        <div className="card-additional__item"><span>Вода</span> <div className="divider"></div> -3</div>
      </div>
    </Card.Body>

    <Card.Body>
      <div className="card__location">Moscow</div>
      <div className="card__date">Tue, 15 March, 14:18</div>
      <div className="card__temperature">-3</div>
      <div className="card-additional">
        <div className="card-additional__item"><div>По ощущениям</div> <div className="divider"></div> -3</div>
        <div className="card-additional__item"><span>Ветер</span> <div className="divider"></div> -3</div>
        <div className="card-additional__item"><span>Давление</span> <div className="divider"></div> -3</div>
        <div className="card-additional__item"><span>Влажность</span> <div className="divider"></div> -3</div>
        <div className="card-additional__item"><span>Г/м активность</span> <div className="divider"></div> -3</div>
        <div className="card-additional__item"><span>Вода</span> <div className="divider"></div> -3</div>
      </div>
    </Card.Body>
  </Card>
}