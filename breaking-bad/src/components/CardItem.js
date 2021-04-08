import { Link } from 'react-router-dom'

export const CardItem = ({ name, image, char_id }) => {
    return (
        <div className="col-4">
            <div className="card mb-4 box-shadow">
                <img className="card-img-fluid" src={image} alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"></p>
                    <Link to={`/${char_id}`}>More about this character</Link>
                </div>
            </div>
        </div>
    )
}

