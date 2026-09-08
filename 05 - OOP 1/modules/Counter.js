export class Counter{
    constructor(startNum){
        this.currentNum = startNum;
    }
    add(){
        this.currentNum++;
    }
    subtract(){
        this.currentNum--;
    }
    render(wrapper){
        const div = document.createElement('div');
        const p = document.createElement('p');
        const addBtn = document.createElement('button');
        const subtractBtn = document.createElement('button');

        wrapper.append(div);
        div.append(p, addBtn, subtractBtn);

        p.innerText = this.currentNum;
        addBtn.innerText = '+';
        subtractBtn.innerText = '-';

        
        addBtn.addEventListener('click', ()=>{
            this.add();
            p.innerText = this.currentNum;
        })
        
        subtractBtn.addEventListener('click', ()=>{
            this.subtract();
            p.innerText = this.currentNum;
           
        })
    }
}