function myFunction() {
    var lambda = document.getElementById("lambda").value;
    var mu = document.getElementById("mu").value;
    var n = document.getElementById("n").value;
    var k = document.getElementById("k").value;
    var t = document.getElementById("t").value;
    var p = lambda/mu;
    
    
    //0.div temel hesaplamalar
    document.getElementById("mu_deger").innerHTML=mu;
    document.getElementById("lambda_deger").innerHTML=lambda;
    document.getElementById("p").innerHTML=p;
    
    //1.div L ile ilgili hesaplamalar
    var Lq = (p*p)/(1-p);
    var Lservis = p;
    var L = Lq+Lservis;
    document.getElementById("Lq").innerHTML=Lq;
    document.getElementById("Ls").innerHTML=Lservis;
    document.getElementById("L").innerHTML=L;
    
    //2.div W ile ilgili hesaplamalar
    var Wq = (Lq/lambda)*60;
    var Wservis = (1/mu)*60;
    var W = Wq+Wservis;
    document.getElementById("Wq").innerHTML=Wq;
    document.getElementById("Wservis").innerHTML=Wservis;
    document.getElementById("W").innerHTML=W;
    
    
    //3.div Po Pn Pr ile ilgili olasilik hesaplamalari
    var Po = 1-p;
    var Pn = (1-p)*Math.pow(p,n);
    var Pr = Math.pow(p,k);
    document.getElementById("Po").innerHTML=Po;
    document.getElementById("Pn").innerHTML=Pn;
    document.getElementById("Pr").innerHTML=Pr;
    
    
    //4.div T ile ilgili olasilik hesaplamalari
    
    var Tq = 1-p*Math.pow(Math.E,-(mu-lambda)*(t/60));
    var Tq2 = p*Math.pow(Math.E,-(mu-lambda)*(t/60));
    var T = 1-Math.pow(Math.E,-(mu-lambda)*(t/60));
    var T2= Math.pow(Math.E,-(mu-lambda)*(t/60));

    document.getElementById("Tq_degeri").innerHTML=Tq;
    document.getElementById("Tq_degeri2").innerHTML=Tq2;
    document.getElementById("T_degeri").innerHTML=T;
    document.getElementById("T_degeri2").innerHTML=T2;
    
}