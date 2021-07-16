import React, { Component } from 'react';


export default class Orders extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 align="center">ORDERS</h1>
                    
                </div>

               
       

        <div>
     
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bootstrap Simple Data Table</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
   
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-8 title"><h2>Order <b>Details</b></h2></div>
                  <div className="col-sm-4">
                  
                    <div className="search-box">
                      <i className="material-icons"></i>
                      <input type="text" className="form-control" placeholder="Search…" />
                      
                    </div>
                    <div className="col-sm-7">
                    <a href="/OrderNew" className="btn btn-secondary  pagination"><i className="material-icons"></i> <span>Add New Order</span></a>
                    						
                  </div>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item Name <i className="fa fa-sort" /></th>
                    <th>Order Type</th>
                    <th>Quantity <i className="fa fa-sort" /></th>
                   
                    <th>Remarks <i className="fa fa-sort" /></th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Thomas Hardy</td>
                    <td>89 Chiaroscuro Rd.</td>
                    <td>Portland</td>
                   
                    <td>USA</td>
                    <td>
                      <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Maria Anders</td>
                    <td>Obere Str. 57</td>
                    <td>Berlin</td>
                    
                    <td>Germany</td>
                    <td>
                      <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Fran Wilson</td>
                    <td>C/ Araquil, 67</td>
                    <td>Madrid</td>
                    
                    <td>Spain</td>
                    <td>
                      <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Dominique Perrier</td>
                    <td>25, rue Lauriston</td>
                    <td>Paris</td>
                    
                    <td>France</td>
                    <td>
                      <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Martin Blank</td>
                    <td>Via Monte Bianco 34</td>
                    <td>Turin</td>
                    
                    <td>Italy</td>
                    <td>
                      <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                    </td>
                  </tr>        
                </tbody>
              </table>
              <div className="clearfix">
                <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul className="pagination">
                  <li className="page-item disabled"><a href="#"><i className="fa fa-angle-double-left" /></a></li>
                  <li className="page-item"><a href="#" className="page-link">1</a></li>
                  <li className="page-item"><a href="#" className="page-link">2</a></li>
                  <li className="page-item active"><a href="#" className="page-link">3</a></li>
                  <li className="page-item"><a href="#" className="page-link">4</a></li>
                  <li className="page-item"><a href="#" className="page-link">5</a></li>
                  <li className="page-item"><a href="#" className="page-link"><i className="fa fa-angle-double-right" /></a></li>
                </ul>
              </div>
            </div>
          </div>  
        </div>   
      </div>
            </div>
            
        )
    }
}
