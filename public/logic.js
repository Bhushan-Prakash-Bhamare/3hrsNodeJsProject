const DForm=document.getElementById('Data-form');
DForm.addEventListener('submit',formSubmit);

//for submission of data to backend
function formSubmit(e){
    e.preventDefault();
    let nameInput=document.getElementById('iName').value;
    let DescInput=document.getElementById('Desc').value;
    let priceInput=document.getElementById('price').value;
    let QuantityInput=document.getElementById('Quantity').value;
    let myobj={
        name:nameInput,
        description:DescInput,
        price:priceInput,
        quantity:QuantityInput
    }
    async function post(myobj){
        try{
            const res= await axios.post(`http://localhost:3100/items`,myobj)
            showUser(res.data.newItemData);
        }
        catch(err)
        {
            console.log(err.message)
        }
    }
        post(myobj); 
}

//for display of updated inventory on refresh
window.addEventListener('DOMContentLoaded',(async()=>{
    try{
        const res= await axios.get(`http://localhost:3100`)
        for(var i=0;i<res.data.itemsData.length;i++)
            showUser(res.data.itemsData[i]);
    }
    catch(err){
        console.log(err.message);
    }

}))

//Function for displaying the items on screen
function showUser(myobj)
{
    var parentElem=document.getElementById('Dlist');
    const childElem=document.createElement('li');
    childElem.innerHTML=(`<span style='font-size:20px;word-spacing: 15px;'>${myobj.name}
    &nbsp &nbsp &nbsp ${myobj.description} &nbsp &nbsp ${myobj.price} &nbsp &nbsp ${myobj.quantity}<span></span>`)
    childElem.className="list-group-item text-center"
    const Qty1btn=document.createElement('button');
    Qty1btn.appendChild(document.createTextNode('Buy 1'));
    Qty1btn.className='btn btn-warning float-end mx-3'
    const Qty2btn=document.createElement('button');
    Qty2btn.appendChild(document.createTextNode('Buy 2'));
    Qty2btn.className='btn btn-primary float-end mx-3'
    const Qty3btn=document.createElement('button');
    Qty3btn.appendChild(document.createTextNode('Buy 3'));
    Qty3btn.className='btn btn-danger float-end mx-3'
    
    childElem.appendChild(Qty3btn);
    childElem.appendChild(Qty2btn);
    childElem.appendChild(Qty1btn);
    
    parentElem.appendChild(childElem);

    Qty1btn.addEventListener('click',async ()=>{
        try{
            const dId=myobj.id;
            const res= await axios.get(`http://localhost:3100/items/${dId}`)
            if(res.data.recItemData.quantity>=1)
            {
                await axios.put(`http://localhost:3100/putItem/${dId}`,{
                    name:res.data.recItemData.name,
                    description:res.data.recItemData.description,
                    price:res.data.recItemData.price,
                    quantity:res.data.recItemData.quantity-1 })
            }
           else
           {
                alert("Qty available is less than 1")
           } 
        }
        catch(err){
            console.log(err.message);
        }
    });

    Qty2btn.addEventListener('click',async ()=>{
        try{
            const dId=myobj.id;
            const res= await axios.get(`http://localhost:3100/items/${dId}`)
            if(res.data.recItemData.quantity>=2)
            {
                await axios.put(`http://localhost:3100/putItem/${dId}`,{
                    name:res.data.recItemData.name,
                    description:res.data.recItemData.description,
                    price:res.data.recItemData.price,
                    quantity:res.data.recItemData.quantity-2 })
            }
           else
           {
                alert("Qty available is less than 2")
           } 
        }
        catch(err){
            console.log(err.message);
        }
    });

    Qty3btn.addEventListener('click',async()=>{
        try{
            const dId=myobj.id;
            const res= await axios.get(`http://localhost:3100/items/${dId}`)
            if(res.data.recItemData.quantity>=3)
            {
                await axios.put(`http://localhost:3100/putItem/${dId}`,{
                    name:res.data.recItemData.name,
                    description:res.data.recItemData.description,
                    price:res.data.recItemData.price,
                    quantity:res.data.recItemData.quantity-3 })
            }
           else
           {
                alert("Qty available is less than 3")
           } 
        }
        catch(err){
            console.log(err.message);
        }
    });
}