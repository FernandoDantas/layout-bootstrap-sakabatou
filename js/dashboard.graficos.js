var Sakabatou = Sakabatou || {};
          
          Sakabatou.GraficoNovosClientes = (function(){
              
              function GraficoNovosClientes(){
                  this.ctx = $('#graficoNovosClientes')[0].getContext('2d');
              }
              
              GraficoNovosClientes.prototype.iniciar = function(){
                  graficoNovosClientes = new Chart(this.ctx,{
                      type: 'line',
                      data: {
                          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
                          datasets: [{
                                  label: 'Novos Clientes',
                                  backgroundColor: "rgba(26,179,148,0.5)",
                                  pointBorderColor: "rgba(26,179,148,1)",
                                  pointBackgroundColor: "#fff",
                                  data: [10, 5, 7, 2, 9]                                  
                          }]
                      },                      
                  });
              }
              
              return GraficoNovosClientes;
              
            }());

            $(function(){
                var graficoNovosClientes = new Sakabatou.GraficoNovosClientes();
                graficoNovosClientes.iniciar();
            });
            
            
            
           //Gráfico novas vendas          
            Sakabatou.GraficoNovasVendas = (function(){
              
              function GraficoNovasVendas(){
                  this.ctx = $('#graficoNovasVendas')[0].getContext('2d');
              }
              
              GraficoNovasVendas.prototype.iniciar = function(){
                  graficoNovasVendas = new Chart(this.ctx,{
                      type: 'bar',
                      data: {
                          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
                          datasets: [{
                                  label: 'Novas Vendas',
                                  backgroundColor: "rgba(61, 48, 191, 0.8)",
                                  pointBorderColor: "rgba(26,179,148,1)",
                                  pointBackgroundColor: "#fff",
                                  data: [9, 2, 7, 5, 10]                                  
                          }]
                      },                      
                  });
              }
              
              return GraficoNovasVendas;
              
            }());

            $(function(){
                var graficoNovasVendas = new Sakabatou.GraficoNovasVendas();
                graficoNovasVendas.iniciar();
            });      
