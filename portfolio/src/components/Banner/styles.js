import styled,{keyframes} from 'styled-components'


const upDownAstronaut = keyframes`
    from{
        transform: translateY(320px);
    }
    to{
        transform: translateY(300px);
    }
`

const appearFromBottom = keyframes`
from{
    opacity: 0;
    transform: translateY(300px);

}
to{
    opacity: 1;
    transform:translateY(0px) ;
}
`


export const Container = styled.div`
display: flex;
height: 500px; 
overflow-y: hidden;
align-items: center;
padding: 15px;



`

export const InfosContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.7rem;
width: 100%;
margin-left: 80px;
margin-right: 80px;

text-align: left;
@media (max-width:800px){
    animation: ${appearFromBottom} 3s ;
    text-align: center;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
}
h3{

    width: fit-content;
    padding:10px;
    background: linear-gradient(to right,
        
        #696EFF,
        #8178FF) ;
    border: 1px solid ;
}
p{
    color: #aaa;
    font-size: 13px;

}
button{
        border: 1px solid #EDF4ED;
        padding: 12px;  
        background-color: #222;
        color: #EDF4ED;
        width: 100px;
        font-size: 18px;
        transition: .5s;
        cursor: pointer;
  
    }
    button:hover{
       background-color: #EDF4ED;
       border: 1px solid #222;
       color: #222;

    }


color: #EDF4ED;
`

export const ImgContainer = styled.div`

@media (max-width:800px) {
    display: none;
}
    position: relative;
    width: 1000px;
    height: 1000px;
    img{
        width: 400px;
        height: 400px;
    }
    animation: ${upDownAstronaut} 3s alternate-reverse infinite;

`

