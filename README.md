![alt text](https://github.com/eipic/react-native-confirmation-prompt/blob/master/preview.jpg)

**** Easy to use React Native ActionSheet that works perfectly on both IOS and Adroid *****

**** How to Use *****
1. Install the package from npm 
   npm install react-native-prompt-actionsheet

2. Import the ConfirmationPrompt class into your component
   import ConfirmationPrompt from 'react-native-prompt-actionsheet';

3. Put the ConfirmationPrompt componenet at the bottom of you container view so as      to make it always visible on top of all other components 
   i.e 
   <View>
        <View></View>
        <View></View>
        <View></View>
        .
        .
        .
        .
        <ConfirmationPrompt/> //...goes here
   </View>

4. Add a state variable and name it as 'actionSheetVisibility' with its initial value of "none" (important!)
      state = {
          actionSheetVisibility: "none" 
      }
      then pass it to the ConfirmationPrompt component
      
      <ConfirmationPrompt actionSheetVisibility={this.state.actionSheetVisibility}>

5. A few parameters are needed to be passed 
        <ConfirmationPrompt 
            actionSheetVisibility={this.state.actionSheetVisibility} 
            message={"string value"}
            yesButton={"string value"}
            noButton={"string value"}
            confirmButtonColor={"color value i.e name, Hex color code, rgb color code"}
            duration={time(integer) in milliseconds}
            obj={this}
            callBack={callback reference e.g this.doSomething()}
            />
        
        i.e obj, callback and actionSheetVisibility are strictly required for component rendering!
    
6. Finally, calling the actionsheet is pretty straightforward. Just call the showConfirmation method as, 
       
       new ConfirmationPrompt().showConfirmation(this)

       e.g 
       <Button onPress={() => new ConfirmationPrompt().showConfirmation(this)}>
       </Button>

**** Parameters Explanations (Optional but important!) ******

    1. message -> pass a message that you need your uses to see. 
       The Default value is "Please Confirm to proceed"
    2. yesButton -> this passes a value to be displayed on a YES button. 
       The Default value is "Confirm"
    3. noButton -> this passes a value to be displayed on a NO button. The Default value is "Cancel"
    4. confirmButtonColor -> this passes a backgroundColor value to be displayed on a YES button. The Default value is "gray"
    5. duration -> time in milliseconds that animation takes to show effect. The default value is 500,
    6. callBack -> A method needed to be called soon after the confimation button is clicked.


**** happy Coding! **** 
email - erick.kondela@gmail.com
twitter - @ErickKondela
github - @eipic
linkedIn - Erick Kondela
