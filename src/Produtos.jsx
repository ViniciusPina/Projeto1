import {} from 'react'
import './Produtos.css'

function Produtos(){
    return(
        <>
    <h1>Produtos</h1>
    <h2>Lista de Produtos</h2>
    <div class='container'>
        <ul id="produtos">
            <li><a href="#"> <img src="./src/assets/12389.png" alt="Monster_Melancia" /> Energetico melancia:</a></li>
            <li><a href="#"> <img src="./src/assets/ultra_paradise.webp" alt="Monster_Melancia" /> Energetico ultra_paradise:</a></li>
            <li><a href="#"> <img src="./src/assets/mango1.jpg" alt="Monster_Melancia" /> Energetico manga:</a></li>
            <li><a href="#"> <img src="./src/assets/violet1.png" alt="Monster_Melancia" />Energetico violeta:</a></li>
        </ul>
    </div>

    </>
    )
}
export default Produtos