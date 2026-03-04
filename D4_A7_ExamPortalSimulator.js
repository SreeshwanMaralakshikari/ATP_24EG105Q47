/*1.Exam portal simulator:
-----------------------------
When a student submits an exam:

        Immediately show: “Exam submitted successfully”
        After 2 seconds → show: “Evaluating answers…”
        After 4 seconds → show: “Result: Pass”
*/

function submitExam()
{
    //(1) Immediately show: “Exam submitted successfully”
    console.log("Exam submitted successfully")

    //(2) After 2 seconds → show: “Evaluating answers…”
    setTimeout(()=>
    {
        console.log("Evaluation Answers...")
    },2000)

    //(3) After 4 seconds → show: “Result: Pass”
    setTimeout(()=>
    {
        console.log("Result: Pass")
    },2000)
}

//Student submits a Exam
submitExam()

