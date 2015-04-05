

//Set the two dates
today=new Date()
var christmas=new Date(today.getFullYear(), 11, 25) //Month is 0-11 in JavaScript
if (today.getMonth()==11 && today.getDate()>25) //if Christmas has passed already
christmas.setFullYear(christmas.getFullYear()+1) //calculate next year's Christmas
//Set 1 day in milliseconds
var one_day=1000*60*60*24

//Calculate difference btw the two dates, and convert to days
document.write(Math.ceil((christmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!")
