# landing-page


/*

/*inicio do estilo de sessao sobre*/

/* Estilos para a seção "Sobre Nossa Empresa" */
#sobre {
    background-color: #f9f9f9; /* Cor de fundo cinza claro */
    padding: 50px 0;
    text-align: center;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
}

.titulo_sobre {
    font-size: 36px;
    margin-bottom: 30px;
    color: #333; /* Cor do texto */
}

.texto_sobre1,
.texto_sobre2 {
    font-size: 18px;
    margin-bottom: 30px;
    color: #555; /* Cor do texto */
}


/*fim do estilo de sessao sobre*/








/*inicio do estilo de sessao clientes*/

#clientes {
    background-color: #f9f9f9;
    padding: 50px 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
}

.titulo_clientes {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
}

.carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch; /* Suporte para scroll suave em dispositivos iOS */
}

.slide {
    flex: 0 0 auto;
    scroll-snap-align: start;
    width: 300px; /* Largura do slide, ajuste conforme necessário */
    margin-right: 20px;
}

.slide img {
    width: 100%;
    border-radius: 10px; /* Adiciona bordas arredondadas às imagens */
}

.slide p {
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
    color: #555;
}

.prev,
.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 20px;
    border-radius: 50%;
    z-index: 1;
}

.prev {
    left: 20px;
}

.next {
    right: 20px;
}

/*fim do estilo de sessao clientes*/









/*inicio do estilo de sessao contato*/


#contato {
    background-color: #f2f2f2;
    padding: 50px 0;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
}

h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
}

p {
    text-align: center;
    margin-bottom: 30px;
    color: #555;
}

form {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 10px;
    color: #333;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #555;
}

/*fim do estilo de sessao contato*/










/*inicio do estilo de sessao footer*/


footer {
    background-color: #333;
    color: #fff;
    padding: 50px 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.links ul,
.politicas ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.links ul li,
.politicas ul li {
    display: inline;
    margin-right: 20px;
}

.links ul li:last-child,
.politicas ul li:last-child {
    margin-right: 0;
}

.links ul li a,
.politicas ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
}

.links ul li a:hover,
.politicas ul li a:hover {
    text-decoration: underline;
}

.copyright p {
    font-size: 14px;
    margin: 0;
}

/*fim do estilo de sessao footer*/

