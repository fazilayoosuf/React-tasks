import React from 'react';
import './App.css';
import User from "./User";
const userList = [
  {
      "value": 1,
      "name": "Justinian Hattersley",
      "avatar": "https://i.pravatar.cc/80?img=1",
      "email": "jhattersley0@ucsd.edu"
  },
  {
      "value": 2,
      "name": "Antons Esson",
      "avatar": "https://i.pravatar.cc/80?img=2",
      "email": "aesson1@ning.com"
  },
  {
      "value": 3,
      "name": "Ardeen Batisse",
      "avatar": "https://i.pravatar.cc/80?img=3",
      "email": "abatisse2@nih.gov"
  },
  {
      "value": 4,
      "name": "Graeme Yellowley",
      "avatar": "https://i.pravatar.cc/80?img=4",
      "email": "gyellowley3@behance.net"
  },
  {
      "value": 5,
      "name": "Dido Wilford",
      "avatar": "https://i.pravatar.cc/80?img=5",
      "email": "dwilford4@jugem.jp"
  },
  {
      "value": 6,
      "name": "Celesta Orwin",
      "avatar": "https://i.pravatar.cc/80?img=6",
      "email": "corwin5@meetup.com"
  },
  {
      "value": 7,
      "name": "Sally Main",
      "avatar": "https://i.pravatar.cc/80?img=7",
      "email": "smain6@techcrunch.com"
  },
  {
      "value": 8,
      "name": "Grethel Haysman",
      "avatar": "https://i.pravatar.cc/80?img=8",
      "email": "ghaysman7@mashable.com"
  },
  {
      "value": 9,
      "name": "Marvin Mandrake",
      "avatar": "https://i.pravatar.cc/80?img=9",
      "email": "mmandrake8@sourceforge.net"
  },
  {
      "value": 10,
      "name": "Corrie Tidey",
      "avatar": "https://i.pravatar.cc/80?img=10",
      "email": "ctidey9@youtube.com"
  },
  {
      "value": 11,
      "name": "foo",
      "avatar": "https://i.pravatar.cc/80?img=11",
      "email": "foo@bar.com"
  },
  {
      "value": 12,
      "name": "foo",
      "avatar": "https://i.pravatar.cc/80?img=12",
      "email": "foo.aaa@foo.com"
  },
];

  class TagList extends React.Component {
    constructor(props) {
      super(props);
  this.state = {
    isTagVilisible:false,
    toDoList: userList,
    selectedTagList:[]
  };
      this.renderList=this.renderList.bind(this)
      this.addUser=this.addUser.bind(this)
      this.renderSelectedItems=this.renderSelectedItems.bind(this)
    }

    toggle=() =>{
      const isTagVilisible =! this.state.isTagVilisible
      this.setState({isTagVilisible})
    }
    addUser=(selectedUser)=>{
       this.state.selectedTagList.push(selectedUser)
       this.setState({selectedTagList:this.state.selectedTagList})
       console.log(this.state.selectedTagList)
   
    }
    
    
    renderList = () => { 
      console.log("calling renderlist");
      const addChoosedUser=this.addUser;
      const items= this.state.toDoList.map(function(item){
        return  <div className="userItem" key={item.value}>
        <User userDetail={item} onChoosedUser={addChoosedUser}/>
        </div>
      
    });
    return items;
  }
  renderSelectedItems=()=>{
    const addChoosedUser=this.addUser;

    const items= this.state.selectedTagList.map(function(item){
      return  <span key={item.value}>
      <User userDetail={item} onChoosedUser={addChoosedUser} />
      </span>
    
  });
  return items;
}
  
    render() {
      
      return (
        <div>
            <div className="App">
            <div className="App-header">Tagify</div>
            <div className="item-container">
              <div className="items"> {this.renderSelectedItems()}</div>
           
          <input type="text"
            className="textareaEl"
            placeholder="Add tags..." onFocus={this.toggle} />
            
          </div>
          </div>
          {this.state.isTagVilisible ? this.renderList():null}
          </div>
    
      )
    }
  };
    export default TagList;