# landing-page


<nav class="menu">
        
            <ul>
              
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contato</a></li>
    
            </ul>
    .menu ul {

    list-style: none;
    justify-content: center;
    align-items: center;
    display: flex;
    background: #6a6b6c;
    margin-top: -55px;
  }
  
  @media all and (max-width: 768px) {
  
    .menu ul    { flex-direction: column; }
    .menu ul li { width:100%; border-bottom: 1px #6b95bf solid; }
    .menu ul a  { width:100%; text-align:center; }
  
  }
  
  .menu ul a {
  
    padding: 1em 2em;
    position: relative;
    display: inline-block;
    color: #f5f5f5;
    font-weight: bold;
    text-decoration: none;
  }
  
  .menu ul a:hover { 
  
    background-color: #02ae24;
    color: #fff; 
  
  }