import styles from './home.module.css'
import saving from '../../img/savings.svg'
import LinkButton from '../layout/linkButton'

function Home() {
    return (
        <section className={styles.homeContainer}>
            <h1>Bem-vindo ao <span>Costs</span> </h1>
            <p>Começe a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='NewProject' text='Criar Projeto'/>
            <img src={saving} alt="costs" />
        </section>
    )
}

export default Home;