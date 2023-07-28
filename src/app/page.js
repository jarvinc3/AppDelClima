import './globals.css'
import Vista from "../../components/vista";
import Cards from '../../components/cards';
import MiniCards from '../../components/miniCards';

export default function Home() {
  return (

    <main className='principal'>
      <Vista />
      <div className='cards-div'>
      <MiniCards />
      <Cards />
      <footer>
        <div className='div-footer'>
          <p className='p1'>created by</p>
          <h3>jarvinc3</h3>
          <p className='p2'> - devChallenges.io</p>
        </div>
      </footer>
      </div>
      
    </main>
  )
}
