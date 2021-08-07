import React from "react";
import Calendar from 'react-awesome-calendar';


class EventsList extends React.Component {
  constructor(props) {
    super(props);
      
    
   
    this.state = {
       dayDisplay: ""
    }

  }
  componentDidMount()
  {
   
  }
  componentWillUnmount()
  {
    this.setState({dayDisplay:""})
  }
  render() {
    var dTemp = new Date(this.props.list.from);
    dTemp = dTemp.setDate(dTemp.getDate() - 1);
    dTemp = new Date(dTemp);
   
    return (
      <tr>
                  <td style={{color:this.props.list.color}}>{this.props.list.title}</td>
                  <td>{ dTemp.toDateString() }</td>
                  <td>
                  <button type="button" class="btn btn-danger new-events"
                     onClick={(e) => { if (window.confirm('Are you sure you want to remove this Event?')) this.props.removeEvent(this.props.list.id) } } 
                   >
                     Delete
                  </button>
                  </td>
                
      </tr>
    )

  }
}

 
class App extends React.Component {
    constructor(props) {
      super(props);
        
      
     
      this.state = {
          dateFrom: null,
          dateTo: null,
          events: [],
          monCheck: false,
          tueCheck: false,
          wedCheck: false,
          thuCheck: false,
          friCheck: false,
          satCheck: false,
          sunCheck: false,
          colorSelect: 'red',
          btnSelected: 'btn-primary',
          title:''
      }

    }

    save_events = (events) =>{
     
      return fetch('https://codingchallenge.jabezonline.net/laravel/public/api/events/store', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify({
            "events" : events
          })
      })
          .then((response) => response.json())
          .then((result) => {
    
             this.clearFields();
        
          })
          .catch((error) => {
              console.error(error);
      });
      
      
    }

    clearFields(){
      this.setState({dateFrom:'',dateTo:'',title:''})
    }

    clearData = () =>{
     
      fetch("https://codingchallenge.jabezonline.net/laravel/public/api/delete/all")
      .then(res => res.json())
      .then(
        (result) => {
          
         
          this.setState({events:[]})
        },
       
        (error) => {
          
        }
      )
      
      
    }

    remove_event = (eventID) =>{
   
      fetch("https://codingchallenge.jabezonline.net/laravel/public/api/delete/"+eventID)
      .then(res => res.json())
      .then(
        (result) => {
          
         
          this.setState({
            events: this.state.events.filter(item => item.id !== eventID)
          });
        },
       
        (error) => {
          
        }
      )
       

      

     
    }


    send_to_server = () =>{
     
      fetch("https://codingchallenge.jabezonline.net/laravel/public/api/events")
      .then(res => res.json())
      .then(
        (result) => {
          
          for (let events of result) {
              
            this.state.events.push(events);
           
          }
          this.setState({events:this.state.events})
        },
       
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      
      
    }

    componentDidMount(){
         this.send_to_server();
    }

  

    addCalendarEvent() {
      var start = new Date(this.state.dateFrom);
      var end = new Date(this.state.dateTo);
      var eventContainer = [];
      var loop = new Date(start);
      var ctr = 0;
      while(loop <= end){
        
         var newDate = loop.setDate(loop.getDate() + 1);
         loop = new Date(newDate);
         var dYear = loop.getFullYear();
         var dMonth = loop.getMonth() + 1;
         var dDay = loop.getDate();
         switch (loop.getDay()) {
          case 0:
           
            if(this.state.sunCheck)
            {
              eventContainer.push({
                id:ctr,
                color: this.state.colorSelect,
                from: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                to: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                title: this.state.title
              });
            }
            break;
          case 1:
            if(this.state.monCheck)
            {
            
              eventContainer.push({
                id:ctr,
                color: this.state.colorSelect,
                from: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                to: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                title: this.state.title
              });
            }
            break;
          case 2:
            if(this.state.tueCheck)
            {
              eventContainer.push({
                id:ctr,
                color: this.state.colorSelect,
                from: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                to: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                title: this.state.title
              });
            }
            break;
          case 3:
            if(this.state.wedCheck)
            {
              eventContainer.push({
                id:ctr,
                color: this.state.colorSelect,
                from: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                to: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                title: this.state.title
              });
            }
            break;
          case 4:
            if(this.state.thuCheck)
            {
              eventContainer.push({
                id:ctr,
                color: this.state.colorSelect,
                from: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                to: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                title: this.state.title
              });
            }
            break;
          case 5:
            if(this.state.friCheck)
            {
              eventContainer.push({
                id:ctr,
                color: this.state.colorSelect,
                from: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                to: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                title: this.state.title
              });
            }
            break;
          case 6:
            if(this.state.satCheck)
            {
              eventContainer.push({
                id:ctr,
                color: this.state.colorSelect,
                from: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                to: dYear+'-'+('0' + dMonth).slice(-2)+'-'+('0' + dDay).slice(-2)+'T18:00:00+00:00',
                title: this.state.title
              });
            }
        }

        
         ctr++;
      }
      
      this.setState({events:this.state.events.concat(eventContainer)});
     
      this.save_events(eventContainer);
    }

    onDateFrom(event) {
      this.setState({dateFrom: event.target.value})
    }

    onDateTo(event) {
        this.setState({dateTo: event.target.value})
    }

    onTitle(event) {
      this.setState({title: event.target.value})
  }


    daysCheck(event,days) {
      const target = days.target;
     
      switch (event) {
        case 0:
          this.setState({sunCheck:target.checked})
          break;
        case 1:
          this.setState({monCheck:target.checked})
          break;
        case 2:
          this.setState({tueCheck:target.checked})
          break;
        case 3:
          this.setState({wedCheck:target.checked})
          break;
        case 4:
          this.setState({thuCheck:target.checked})
          break;
        case 5:
          this.setState({friCheck:target.checked})
          break;
        case 6:
          this.setState({satCheck:target.checked})
      }


      
      
    }

   

    render() {
        return (
          <div class="row">
            <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog">
        
        
                <div class="modal-content">
                  <div class="modal-header">
                  <h2>Create Events</h2>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  
                  </div>
                  <div class="modal-body">
                  <div class="col-12" >
                  <form>
                        <div class="input-group mb-3">
                          <div class="form-group">
                              <label for="">Event Title:</label>
                              <input type="text" value={this.state.title}   onChange={this.onTitle.bind(this)}  class="form-control" id="" />
                            </div>
                            <br />
                            <div class="form-group">
                              <label for="">From</label>
                              <input type="date" id="" value={this.state.dateFrom}  onChange={this.onDateFrom.bind(this)} class="form-control"  name="dateFrom" />
                            </div>
                            <div class="form-group">
                              <label for="">To</label>
                              <input type="date" id="" value={this.state.dateTo}  onChange={this.onDateTo.bind(this)} class="form-control"  name="dateTo" />
                            </div>
                          
                            <div class="input-group-prepend mb-3">
                              <div class="input-group-text">
                                <span class="input-group-text"><input type="checkbox"  value={1} onChange={this.daysCheck.bind(this,1)} /> Mon</span>
                              </div>
                              <div class="input-group-text">
                                <span class="input-group-text"><input type="checkbox" value={1} onChange={this.daysCheck.bind(this,2)}/> Tue</span>
                              </div>
                              <div class="input-group-text">
                                <span class="input-group-text"><input type="checkbox" value={1} onChange={this.daysCheck.bind(this,3)} /> Wed</span>
                              </div>
                              <div class="input-group-text">
                                <span class="input-group-text"><input type="checkbox" value={1} onChange={this.daysCheck.bind(this,4)} /> Thu</span>
                              </div>
                              <div class="input-group-text">
                                <span class="input-group-text"><input type="checkbox" value={1} onChange={this.daysCheck.bind(this,5)} /> Fri</span>
                              </div>
                              <div class="input-group-text">
                                <span class="input-group-text"><input type="checkbox" value={1} onChange={this.daysCheck.bind(this,6)} /> Sat</span>
                              </div>
                              <div class="input-group-text">
                                <span class="input-group-text"><input type="checkbox"  value={1} onChange={this.daysCheck.bind(this,0)} /> Sun</span>
                              </div>
                              
                            </div>

                            <div class="form-group">
                              <label for="">Select Event Color</label>
                              <br />
                              <div class="btn-group mb-3">
                              
                                <button type="button" class="btn btn-danger"  onClick={ () => { this.setState({colorSelect:'red',btnSelected:'btn-danger'}) }} >
                                
                                </button>
                                <button type="button" class="btn btn-primary" onClick={ () => { this.setState({colorSelect:'blue',btnSelected:'btn-primary'}) }}></button>
                                <button type="button" class="btn btn-warning" onClick={ () => { this.setState({colorSelect:'yellow',btnSelected:'btn-warning'}) }}></button>
                                <button type="button" class="btn btn-success" onClick={ () => { this.setState({colorSelect:'green',btnSelected:'btn-success'}) }}></button>
                                
                              </div>

                            </div>

                          
                            <div class="form-group btn-block mt-10"> 
                              <button type="button" data-dismiss="modal" class={"btn btn-block "+ this.state.btnSelected}  onClick ={ ()=>  this.addCalendarEvent() }>Save</button>
                            </div>
                          
                          
                        
                        </div>
                  </form>
                  </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
                
              </div>
          </div>
          <div class="col-sm-12">
            <button type="button" class="btn btn-danger clear-events" onClick={(e) => { if (window.confirm('Are you sure you want to clear all your Events?')) this.clearData() } } >Clear All Events</button>
            <button type="button" class="btn btn-info new-events" data-toggle="modal" data-target="#myModal" >Create New Event</button>
          </div>    

          <div class="col-12 col-sm-4 calendarWrapper ">
            <div class="calendarHeader">
              <h1><span class="thickText">My Events</span></h1>
            </div>
            <div class="calendar-events">
              {
                this.state.events.length > 0 ?
                <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {  
                              
                      this.state.events.sort((a, b) => a.from.localeCompare(b.from)).map((events) =>
                                
                          <EventsList list={events} removeEvent={this.remove_event} />
                  
                
                      )
          
                    }
                   </tbody>
                </table>
                :
                <p class="report-display"><span class="thickText">You have no events</span></p>
              }
             
          </div>
          </div>
           
          <div class="col-12 col-sm-8">
            
            
               <Calendar
                events={this.state.events}
                headerRender={{mode: "dailyMode"}}
              />
          </div>
        </div>
           
        );
    }
}

export default App;
