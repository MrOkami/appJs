const app = new function(){
    this.el=document.getElementById('tasks');
    this.tasks=[];

    this.FetchAll = function(){
        let data = '';

        if (this.tasks.length > 0){
            for(i = 0; i < this.tasks.length; i++){
                data += '<tr>';
                data += '<td>'+(i+1)+'. '+this.tasks[i]+'</td>';
                data += '<td><button onclick="app.Edit('+i+')" class="btn btn-warning">Edit</button></td>';
                data += '<td><button onclick="app.Delete('+i+')" class="btn btn-danger">Delete</button></td>';
                data += '</tr>';
            }
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data;
    };

    this.Add = function(){
        el = document.getElementById('add-todo');
        
        //Get the value
        let tasks = el.value;

        if(tasks){
            //add the new value
            this.tasks.push(tasks.trim());

            //reset input value
            el.value='';

            //display the new list
            this.FetchAll();
        }
    };

    this.Edit = function(item){
        el = document.getElementById('edit-todo');

        //display value in the field
        el.value = this.tasks[item];
        //display field
        document.getElementById('edit-box').style.display = 'block';
        self = this;

        document.getElementById('save-edit').onsubmit = function(){
            // get value
            let tasks = el.value;

            if(tasks){
                //edit value
                self.tasks.splice(item, 1, tasks.trim());
                //display the new list
                self.FetchAll();
                //hide fields
                CloseInput;
            }
        }
    };

    this.Delete = function(item){
        //delete the current row
        this.tasks.splice(item, 1);
        //display the new list
        this.FetchAll();

    };

    this.Count = function(data){
        let el = document.getElementById('counter');
        let name = 'Tasks';

        if(data){
            if(data == 1){
                name = 'Tasks';
            }
            el.innerHTML = data+' '+name;
        }
        else{
            el.innerHTML = 'No '+name;
        }
    };

}

app.FetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.display = "none";
}