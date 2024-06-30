import styles from './styles.module.css'

export function Button(props) {
    return(
        <button className={styles.button}>{props.value}</button>
    )
}