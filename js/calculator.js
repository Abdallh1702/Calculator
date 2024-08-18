function Calculator(){
    document.getElementById("result").style.backgroundColor = 'rgb(155, 248, 148)'
    // Is Prompt Used To Get All Operation In User 
    let Operations_Input_In_User = document.getElementById("result").value 
            
    //let Operations_Input_In_User = prompt('Please Enter The Operator : ');

    // This Varible Used To Collect Operations Again After Removing Spaces

    let Final_Operation = []

    // This while Store_Operations_Again_After_Deleting_Spacessed To Delete All Spaces

    let Operations_Input_In_User_Without_Spaces = [];
    let Varible_To_Delete_Spaces  = 0;

    while (Varible_To_Delete_Spaces < Operations_Input_In_User.length){

        if (Operations_Input_In_User[Varible_To_Delete_Spaces] !== ' ')
            Operations_Input_In_User_Without_Spaces.push(Operations_Input_In_User[Varible_To_Delete_Spaces]);

        Varible_To_Delete_Spaces ++;
    };

    // This While Used To Collect Operations Again After Removing Spaces

    let First_Number_In_The_Operation  = ''
    let The_Varible_To_Collect_Operations_Again_After_Removing_Spaces = 0;
    
    while (The_Varible_To_Collect_Operations_Again_After_Removing_Spaces < Operations_Input_In_User_Without_Spaces.length){
        if (!'+-x÷%'.includes(Operations_Input_In_User_Without_Spaces[The_Varible_To_Collect_Operations_Again_After_Removing_Spaces])){

            First_Number_In_The_Operation  = First_Number_In_The_Operation  + Operations_Input_In_User_Without_Spaces[The_Varible_To_Collect_Operations_Again_After_Removing_Spaces]

            if (The_Varible_To_Collect_Operations_Again_After_Removing_Spaces === Operations_Input_In_User_Without_Spaces.length -1)
                Final_Operation.push(First_Number_In_The_Operation )
        }
        else if ('+-x÷%'.includes(Operations_Input_In_User_Without_Spaces[The_Varible_To_Collect_Operations_Again_After_Removing_Spaces])){

            Final_Operation.push(First_Number_In_The_Operation )
            Final_Operation.push(Operations_Input_In_User_Without_Spaces[The_Varible_To_Collect_Operations_Again_After_Removing_Spaces])
            First_Number_In_The_Operation  = ''
        }
        The_Varible_To_Collect_Operations_Again_After_Removing_Spaces ++ ;
    }

    // The Varible Result In The First Operation = The First Index in Array Final_Operation 
    let result = Final_Operation[0];

    let Second_Number_In_The_Operation = ''
    let Varible_To_Loop_In_Ona_Operation_To_Get_Final_Result = 1;

    while (Varible_To_Loop_In_Ona_Operation_To_Get_Final_Result < Final_Operation.length){

        Second_Number_In_The_Operation  = Final_Operation[Varible_To_Loop_In_Ona_Operation_To_Get_Final_Result + 1]
        Operation = Final_Operation[Varible_To_Loop_In_Ona_Operation_To_Get_Final_Result]

        // To Verify The Correctness Of The Operation And Not To Enter On Incorrect Operation
        
        if ('+-x÷% '.includes(Second_Number_In_The_Operation)){

            document.getElementById("result").value = "Error"
            document.getElementById("result").style.backgroundColor = 'red'
            return;

        } else {
            // To Check The Type Of Operation Required
            switch (Operation){
                // If the required operation is addition
                case '+':
                    result = parseFloat(result) + parseFloat(Second_Number_In_The_Operation )
                    break
                // If The Required Operation Is Subtraction
                case '-':
                    result = parseFloat(result) - parseFloat(Second_Number_In_The_Operation )
                    break
                // If The Required Operation Is Multiplication
                case 'x':
                    result = parseFloat(result) * parseFloat(Second_Number_In_The_Operation )
                    break
                // If the Required Operation Is Division
                case '÷':
                    result = parseFloat(result) / parseFloat(Second_Number_In_The_Operation )
                    break
                // If The Required Operation Is The Remainder Of The Division
                case '%':
                    result = parseFloat(result) % parseFloat(Second_Number_In_The_Operation )
                    break
                default :
                    document.getElementById("result").value = "Error"
                    document.getElementById("result").style.backgroundColor = 'red'
                    
            }
        }

        Varible_To_Loop_In_Ona_Operation_To_Get_Final_Result ++;
        Varible_To_Loop_In_Ona_Operation_To_Get_Final_Result ++;
    }
    // To Print The Final Result
    document.getElementById("result").value = result
}


function Delete_Display() { 
    document.getElementById("result").value = "" 
}

function dis(val) { 
    document.getElementById("result").value += val 
}

function myFunction(event) { 
    if ('0123456789+-*/%'.includes(event.key)) 
        document.getElementById("result").value += event.key;
}
