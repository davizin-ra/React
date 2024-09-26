import styles from "./Form.module.css"
import {useState} from "react";
import {categorias} from "../Category"


function Form(){

    const [ url, setUrl ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ videos, setVideos ] = useState([])
    const [ erro , setErro ] = useState('')


    function validaURL(url){
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/
        
        if(!regex.test(url) || url.length < 43){
            setErro('ERRO: URL inválida!')
            return false
        } else {
            return url.substring(32, 43)
        }
    }

    function onSave(e){
        e.preventDefault()

        if(!category || category === '-'){
            setErro('ERRO: Escolha uma categoria')
        } else{
            setErro('')
        }
        
        //validação
        const urlVideo = validaURL(url)
        if(urlVideo && category){
            //armazenmaneto
            const newVideo = {url,category}
            setVideos([...videos, newVideo]) 
            localStorage.setItem('video', JSON.stringify({...videos, newVideo}))
            
        }else{
            setErro('ERRO: URL inválida')
        }
        
        //limpar armazenamento
        setUrl('')
        setCategory('')
    }

    return(

        <section className={styles.container}>

            <h2>Cadastro de vídeos</h2>

            <form onSubmit={onSave} >

                <div>

                    <label>URL do vídeo</label>

                    <input 
                    
                    type="text"
                    placeholder="Digite a URL do vídeo"
                    required="required"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    minLength="43"
                    maxLength="43"
                    
                    ></input>

                </div>

                <div>

                    <label>Categoria</label>

                    <select
                    
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        required="required"
                    
                    >
                        <option value="-">Selecione uma categoria</option>

                        {categorias.map(item => {

                            return <option value={item}>{item}</option>

                        })}
                        
                    </select>

                </div>

                <div>
                    <button>Cadastrar</button>
                </div>

                <div>
                    {erro}
                </div>

            </form>

        </section>

    );

}

export default Form;