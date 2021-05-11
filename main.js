/*
1. initialize the database--
2. generally you can read the data, write the data
3. To read the data, on("value", function(data))
4. ref() --refers the database
5. val()--use it inside the on 


*/

var database;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    readData();

    button = createButton('Clickme');


}


function draw(){
    background("white");

    button.mousePressed()
        writeData();
    

    drawSprites();
}

function readData(){
    //refer teh database; ref()

    var dbRef = database.ref();
    dbRef.on("value", function(parv){
        myResult = parv.val();
        console.log(myResult);
    })
}

function writeData(){
    //refer the database 

    var dbRef = database.ref();

    //to write the data we have 2 fucntions: set and update
    //entirely delete the old data and set the new data for you
    /* dbRef.set({
        'Name':'ParvShah',
        'Hobby':'Coding',

    })
 */
//update wil not delete any old data
    dbRef.update({
        
        'DOB':09-90-90,
        'Skill':'Coding'});

}
/*
1. on("value",function(data))
2. set();
3. update();
4. ref()
5. val();


*/