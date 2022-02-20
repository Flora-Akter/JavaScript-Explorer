function explainCallBack(name,age,task) {
    console.log('Hello',name);
    console.log('your age', age);
    task();
}
function washHand(){
    console.log('wash your hand carefully');
}
function takeShower(){
    console.log('take your shower regularly');
}
explainCallBack('Flora', 18,washHand );
explainCallBack('sonia', 21,takeShower);