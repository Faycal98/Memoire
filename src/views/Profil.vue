<template>

<section>
        <div class="sidebar">
            <div style="margin-top: 10px;margin-right: -37px;" class="logo">  
                <router-link to="/">
                    <span style="color: #fff;font-size: 30px;font-weight: bold; "><i style="margin-left: -35px;
                              color: rgb(221, 88, 55);" class="fa-solid fa-home"></i></span>
                </router-link>
                
            </div>
            <ul class="menu">
                
                <li class="active">
                    <a href="">
                        <i class="fa-solid fa-user"></i>
                        <span>Profile</span>
                    </a>
                </li>
                
                <li>
                    <a href="#liste" >
                        <i class="fa-solid fa-list"></i>
                        <span>Liste</span>
                    </a>
                </li>
                
            
                <li>
                    <a href="">
                        <i class="fa-solid fa-cog"></i>
                        <span>Paramètre</span>
                    </a>
                </li>
                <li class="logout">
                    <a @click="logout" href="">
                        <i class="fa-solid fa-sign-out"></i>
                        <span>Déconnexion</span>
                    </a>
                </li>
            </ul>
        </div>
    
        <div class="main--content" id="main" >
            <div class="header--wrapper">
                <div class="header--title">
                    <span style="font-size: 18px; ;">Espace</span>
                    <h2 style="font-size: 30px; font-weight: bold;">Propriétaire</h2>
                </div>
                <div class="user--info">
                    <div class="search--box">
                        <i class="fa-solid fa-search"></i>
                        <input type="text" placeholder="Recherche">
                    </div>
                    <img src="../assets/marc.jpg" alt="">
                </div>
            </div>
            <div class="card--container" id="profil">
                <h3 class="main-title">Mes informations</h3>
                <div class="card--wrapper">
                    <div class="payment--card light-red">
                        <div class="card--header">
                            <div class="amount">
                                <span class="title">
                                    NOM***
                                </span>
                                <span class="amount-value">Prenom****</span>
                            </div>
                            <i class="fa-solid fa-user icon"></i>
                        </div>
                        
                    </div>
    
                    <div class="payment--card light-purple">
                        <div class="card--header">
                            <div class="amount">
                                <span class="title">
                                    (+229)
                                </span>
                                <span class="amount-value">97-98-99-90</span>
                            </div>
                            <i class="fa-solid fa-phone dark-purple icon"></i>
                        </div>
                         
                    </div>
    
                    <div class="payment--card light-blue">
                        <div class="card--header">
                            <div class="amount">
                                <span class="title">
                                    Annonces disponible
                                </span>
                                <span class="amount-value">5</span>
                            </div>
                            <i class="fa-solid fa-check dark-blue icon"></i>
                            
                        </div>
                        
                    </div>
    
                    <div class="payment--card light-green">
                        <div class="card--header">
                            <div class="amount">
                                <span class="title">
                                     ammmalkjffjfj
                                </span>
                                <span class="amount-value">4</span>
                            </div>
                            <i class="fa-solid fa-envelope dark-green icon"></i>
                        </div>
                         
                    </div>
                </div>
            </div>
    
            <!-----table----->
            <div class="tabular--wrapper" id="liste"  >
                <h3 class="main-title">Liste des annonces</h3>
                <div class="table-container" >
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Type de logement</th>
                                <th>But de l'annonce</th>
                                <th>Description</th>
                                <th>Periode de paiement</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023-05-01</td>
                                <td>Maison</td>
                                <td>Vente</td>
                                <td>$250</td>
                                <td></td>
                                <td>Disponible</td>
                                <td><input class="btn1" type="submit" value="Modifier">
                                    <input  class="btn2" type="submit" value="Supprimer">
                                </td>
                                
                            </tr>
                            <tr>
                                <td>2023-05-01</td>
                                <td>Chambre à louer</td>
                                <td>Location</td>
                                <td>$250</td>
                                <td>Mensuel</td>
                                <td>Disponible</td>
                                <td><input class="btn1" type="submit" value="Modifier">
                                    <input   class="btn2" type="submit" value="Supprimer">
                                </td>
                            </tr>
                            <tr>
                                <td>2023-05-01</td>
                                <td>Appartement</td>
                                <td>Location</td>
                                <td>$250</td>
                                <td>Annuel</td>
                                <td>Disponible</td>
                                <td><input class="btn1" type="submit" value="Modifier">
                                    <input  class="btn2" type="submit" value="Supprimer">
                                </td>
                            </tr>
                            <tr>
                                <td>2023-05-01</td>
                                <td>Expenses</td>
                                <td>Office Supplies</td>
                                <td>$250</td>
                                <td>Office Expenses</td>
                                <td>Pending</td>
                                <td><input class="btn1" type="submit" value="Modifier">
                                    <input  class="btn2" type="submit" value="Supprimer">
                                </td>
                                
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="7">Annonces totales : 4</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </section>

</template>
<script>/*
var btnliste = document.getElementById('btnliste');
var liste = document.getElementById('liste');


btnliste.addEventListener('click',function ()  {
    liste.style.display='block';
    
})
*/
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
*{
    
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
}
section{
    display: flex;
}
.sidebar{
    position: sticky;
    top: 0;
    left: 0;
    bottom: 0;
    width: 110px;
    height: 100vh;
    padding: 0 1.7rem;
    color: #fff;
    overflow: hidden;
    transition: all 0.5s linear;
    background: #36417d;
}
.sidebar:hover{
    width: 260px;
    transition: 0.5s;
}
.logo{
    height: 80px;
    padding: 16px;
}
.menu{
    height: 88%;
    position: relative;
    list-style: none;
    padding: 0;
}
.menu li{
    padding: 1rem;
    margin: 8px 0;
    border-radius: 8px;
    transition: all 0.5s ease-in-out;
}
.menu li:hover,
.active{
    background: #e0e0e058;
}
.menu a{
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1.5rem;
}
.menu a span{
    overflow: hidden;
}
.menu a i{
    font-size: 1.2rem;
}
.logout{
    position: absolute;
    bottom: 50px;
    left: 0;
    width: 100%;
}


/*--------main--content---------*/
.main--content{
    position: relative;
    background: #ebe9e9;
    width: 100%;
    padding: 1rem;
}
.header--wrapper img{
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
}
.header--wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #fff;
    border-radius: 10px;
    padding: 2px 2rem;
    margin-bottom: 1rem;
}
.header--title{
    color: rgb(221, 88, 55);
}
.user--info{
    display: flex;
    align-items: center;
    gap: 1rem;
}
.search--box{
    background: rgba(237, 237, 237);
    border-radius: 15px;
    color: rgb(221, 88, 55);
    display: flex;
    align-items: center;
    gap: 5;
    padding: 4px 12px;
}
.search--box input{
    background: transparent;
    padding: 10px;
}
.search--box i{
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.5s ease-out;
}
.search--box i:hover{
    transform: scale(1.2);
}


/*---------------card--container-----------*/
.card--container{
    background: #fff;
    padding:  2rem;
    border-radius: 10px;
}
.card--wrapper{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
.main-title{
    color: rgb(221, 88, 55);
    padding-bottom: 8px;
    font-size: 15px;
    font-weight: bold;
    margin-right: 88%;
}
.payment--card{
    background: rgba(229, 223, 223);
    border-radius: 10px;
    padding: 1.2rem;
    width: 315px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
}
.payment--card:hover{
    transform: translateY(-5px);
}
.card--header{
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 20px;
}
.amount{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
}
.title{
    font-size: 20px;
    font-weight: 600;
}
.amount-value{
    font-size: 24px;
    font-family: "Courier New", Courier, monospace;
    font-weight: 600;
}
.icon{
    color: #fff;
    padding: 1rem;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    font-size: 1rem;
    background: red;
}
.card-detail{
    font-size: 18px;
    color: #777777;
    letter-spacing: 2px;
    font-family: "Courier New", Courier, monospace;
}

/*---------color css--------*/
.light-red{
    background: rgb(251, 233, 233);
}
.light-purple{
    background: rgb(254, 226, 254);
}
.light-green{
    background: rgb(235, 254, 235);
}
.light-blue{
    background: rgb(236, 236, 254);
}
.dark-red{
    background: red;
}
.dark-purple{
    background: purple;
}
.dark-green{
    background: green;
}
.dark-blue{
    background: #36417d;
}

/*-----------------tabular--wrapper-----------*/
.tabular--wrapper{
    background: #fff;
    margin-top: 1rem;
    border-radius: 10px;
    padding: 2rem;
}
.table-container{
    width: 100%;
}
table{
    width: 100%;
    border-collapse: collapse;
}
thead{
    background: rgb(221, 88, 55);
    color: #fff;
}
th{
    padding: 15px;
    
}
tbody{
    
    background: #fff;
}
td{
    padding: 15px;
    font-size: 14px;
    color: black;
    font-weight: 600;
}
tr:nth-child(even){
    background: #f2f2f2;
}
tfoot{
    background: #36417d;
    font-weight: bold;
    color: #fff;
}
tfoot td{
    padding: 15px;
    color: #fff;
}
.table-container .btn1{
    color: green;
    background: none;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
}
.table-container .btn2{
    color: rgb(235, 16, 16);
    background: none;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    margin-left: 15px;
    margin-right: -12px;
}

</style>