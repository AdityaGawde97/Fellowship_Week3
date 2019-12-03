/**************************************
 * @purpose :Demonstrate Observer design pattern.
 * @file    :observer2.js
 * @author  :Aditya Gawde
 *************************************/

class Observer
{
    constructor()
    {
        this.observer=[];
        this.msg=null;
        this.changed=false;
    }
    /**
     * @purpose :observer register to the topic
     */
    subscribe(object)
    {
        this.observer.push(object);
    }
    /**
     * @purpose :message post in the topic
     */
    postMessage(msg)
    {
        this.msg=msg;
        this.changed=true;
        this.notifyObserver()
    }
    /**
     * @purpose :Any changes notify the observer
     */
    notifyObserver()
    {
        this.observer.forEach(element => {
            element.update(this.msg);
          });
    }
}
/**
 * @purpose :MyTopicSubscriber is the observer(Object that watch on the state of another object)
 */
class MyTopicSubscriber
{
    constructor(name){
        this.name=name;
    }

    setSubject(sub){
        this.topic=sub;
    }
    update(msg)
    {
        if(msg==null)
        {
            console.log('No new Message');
        }
        else
        {
            console.log(`${this.name} consuming message: ${msg}`)
        }
    }
}
var topic = new Observer();	
//create observers
var obj1 = new MyTopicSubscriber("user1");
var obj2 = new MyTopicSubscriber("user2");
var obj3 = new MyTopicSubscriber("user3");
		
//register observers to the subject
topic.subscribe(obj1);
topic.subscribe(obj2);
topic.subscribe(obj3);
		
//attach observer to subject
obj1.setSubject(topic);
obj2.setSubject(topic);
obj3.setSubject(topic);
//check if any update is available
obj3.update(topic.msg);
	console.log('this');
    	
//now send message to subject
topic.postMessage("Hi user");