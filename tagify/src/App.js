import React from 'react';
import './App.css'


  class TagList extends React.Component {
    constructor(props) {
      super(props);
  this.state = {
    toDoList: ['Justinian Hattersley','Antons Esson','Ardeen Batisse',
                'Graeme Yellowley',]
  };
      this.renderList=this.renderList.bind(this)
    }
    
    
    renderList(){
            this.setState(this.state.toDoList)       
     
    }
    render() {
     const items= this.state.toDoList.map(function(item,index){
        return <li className="listEl" key={item}>{item}<button>&times;</button> </li>;
      })
      return (
        <div>
            <div className="App">
                <div className="App-header">Tagify</div>
          <textarea
            className="textareaEl"
            placeholder="Add tags..." onMouseEnter={this.renderList} /><br />
         
          </div>
         

  <ul>
  {items}
</ul>
</div>
  
      );
    }
  };
    export default TagList;