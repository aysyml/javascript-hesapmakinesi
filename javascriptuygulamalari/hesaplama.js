
        var k1;
        var k2;
        var hesapBtn;
        var dortislem;


        function Toplama(){

             k1 = Number(document.getElementById("toplama1").value);
             k2 = Number(document.getElementById("toplama2").value);
             dortislem = k1 + k2;
             document.getElementById("sonuc2").innerHTML="Toplama :" + dortislem;

        }

        hesapBtn=document.getElementById("toplama_buton");
        hesapBtn.onclick=Toplama;

        function Cikarma(){
            k1 =Number(document.getElementById("cikarma1").value);
            k2=Number(document.getElementById("cikarma2").value);
            dortislem=k1-k2;
            document.getElementById("sonuc3").innerHTML="Çıkarma :" + dortislem;
            
        }

        hesapBtn=document.getElementById("cikarma_buton");
        hesapBtn.onclick=Cikarma;


        function Bolme(){
            k1=Number(document.getElementById("bolme1").value);
            k2=Number(document.getElementById("bolme2").value);
            dortislem=k1 / k2;
            document.getElementById("sonuc4").innerHTML="Bölme :" + dortislem;
        }

        hesapBtn =document.getElementById("bolme_buton");
        hesapBtn.onclick=Bolme;

        function Carpma(){
            k1=Number(document.getElementById("carpma1").value);
            k2=Number(document.getElementById("carpma2").value);
            dortislem=k1 * k2;
            document.getElementById("sonuc5").innerHTML="Çarpma :" + dortislem;
        }
        hesapBtn=document.getElementById("carpma_buton")
		hesapBtn.onclick=Carpma;

