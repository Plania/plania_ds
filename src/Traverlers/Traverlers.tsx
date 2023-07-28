import { Dispatch, SetStateAction } from 'react';
import './style.css';

interface TraverlersProps {
    setData: Dispatch<SetStateAction<any>>;
    data: any;
  }


const Traverlers = ({setData ,data}  : TraverlersProps) => {
    const addAgeSelector = () => {
        setData({
            ...data,
            traverlers : [...data.traverlers, {
                age : 18,
            }]
        })
    }

    const removeAgeSelector = () => {
       data.traverlers.pop()
        setData({
            ...data,
            traverlers : [...data.traverlers]
        })
    }

  return (
    <section className="traverlers-container">
      <h1>Travelers</h1>
      <p>
        How many travelers will visit the city?
      </p>
      <div className='traverlers-button-container'>
       Add Travelers
       <tf-button variant="primary" size="medium" active icon="remove" onClick={removeAgeSelector} />
       <tf-button variant="primary" size="medium" active icon="add" onClick={addAgeSelector}/>
      </div>
      
            {data.traverlers.map((traverler : any, index : number) => (
                <tf-age-selector slider="on" label='Tr 1' status='default' key={index} />
            ))}
    
       
    </section>
  )
}

export default Traverlers