fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
  .then((response) => response.json())
  .then(function (comm) {
    console.log(comm);
    console.log(comm[0]);
    console.log(comm[0].ccy);
    console.log(comm[0].buy);

    curs1.innerHTML = comm[0].ccy + " / " + comm[0].base_ccy;
    curs1buy.innerHTML = comm[0].buy;
    curs1sale.innerHTML = comm[0].sale;

    curs2.innerHTML = comm[1].ccy + " / " + comm[1].base_ccy;
    curs2buy.innerHTML = comm[1].buy;
    curs2sale.innerHTML = comm[1].sale;

    curs3.innerHTML = comm[2].ccy + " / " + comm[2].base_ccy;
    curs3buy.innerHTML = comm[2].buy;
    curs3sale.innerHTML = comm[2].sale;

    curs4.innerHTML = comm[3].ccy + " / " + comm[3].base_ccy;
    curs4buy.innerHTML = comm[3].buy;
    curs4sale.innerHTML = comm[3].sale;
  });

fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
  .then((response) => response.json())
  .then(function (comm1) {
    console.log(comm1);
    console.log(comm1[0]);
    console.log(comm1[0].ccy);
    console.log(comm1[0].buy);

    cura1.innerHTML = comm1[0].ccy + " / " + comm1[0].base_ccy;
    cura1buy.innerHTML = comm1[0].buy;
    cura1sale.innerHTML = comm1[0].sale;

    cura2.innerHTML = comm1[1].ccy + " / " + comm1[1].base_ccy;
    cura2buy.innerHTML = comm1[1].buy;
    cura2sale.innerHTML = comm1[1].sale;

    cura3.innerHTML = comm1[2].ccy + " / " + comm1[2].base_ccy;
    cura3buy.innerHTML = comm1[2].buy;
    cura3sale.innerHTML = comm1[2].sale;

    cura4.innerHTML = comm1[3].ccy + " / " + comm1[3].base_ccy;
    cura4buy.innerHTML = comm1[3].buy;
    cura4sale.innerHTML = comm1[3].sale;
  });
