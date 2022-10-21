# To-Do List Pseudocode
## Roger Mullins

### Description
Create an online to-do list manager application.
For this project, we will be using React and LocalStorage to keep track of todos with full CRUD (Create/Read/Update/Delete) functionality. 

### MVP
By default, the app should display the items on the to-do list and list their status. The app should retain state upon a revisit of the page using LocalStorage.

### Requirements
To complete the assignment, you must complete the following:
1. ✓ Dynamically Render the content with React using components
1. ✓ Use Local Storage to store all to-do list data in the browser
1. ✓ Display all to-do list items
1. ✓ Three "views" for the user: 
    1. ✓ All
    1. ✓ Completed
    1. ✓ To-Do (not completed)
1. ✓ Display Prompting text to add item
1. ✓ Cross out or check off one item as "completed"
1. ✓ See a count of remaining items
1. ✓ Remove one item (either hard delete or soft delete/archive)
1. ✓ Check off or cross out all items in one click as a "completed all" function
1. ✓ Remove all completed items (soft delete/archive)
1. ✓ Ability to press a button and all checked off items become active again
1. Website must be responsive
1. ✓ Website must be styled
1. ✓ Use tools/technologies covered in class
1. ✓ Repo should be public

*A fully functional CRUD (Create, Read, Update, Delete) style application should be demoed at the end of the week.*

### Stretch Goals
1. ✓ Create a flow diagram for the front end architecture to be used in an MVP
1. ✓ (Sorta) Edit To-Do's inline with a doubleclick event that changes it from a rendered text to a text input.
1. Add a separate “Reminders” set of functionality
1. Add due dates and alarms to the to-dos that handle pop ups in your browser in an elegant fashion
1. Automatically mark to-dos with a new status based on done/not done and the time it was due.

![UML Diagram](todo/src/To-Do List UML.png "UML Diagram")

# MoSCoW

|Must Have|Should Have|Could Have|Won't Have
|---|---|---|---|
|✓ Input Box|README.md |Color Coding | |
|✓ useState for page view|Animation/Transition on Check|✓ Time/Date||
|✓ useState for list items|✓ Inline editability|Reminder||
|✓ localStorage|Desktop vs Mobile Layout|GTD Integration|
|✓Counter|||

# Thinking in React

1. Break UI Into Components
    - App
    - Header
    - Input
    - Page View Area
        - View Title
        - To-Do List
            - Checkbox
            - Text
            - Delete Button
    - Footer
        - Pending (DEFAULT)
            - Radio Button
            - Count
        - Completed
            - Radio Button
            - Count
        - All
            - Radio Button
            - Count
        - Clear Button
        - Reactivate Button
1. Build a Static Version in React / COMPLETED
1. Find the Minimal But Complete Representation of State
    - View
        - Pending
        - Completed
        - All
    - ToDoList
1. Identify Where State Should Live
    - App
1. Add Inverse Data Flow
    - View
        - Setter is available from the Footer component, where the view can be changed
    - ToDoList
        - Setter is available from the following components:
            - InputArea (items can be added)
            - Table (existing items can be changed)
            - Footer (Clear and Reset buttons)


# Components

- App
    - Header
    - Input
    - Page View Area
        - View Title
        - To-Do List
            - Checkbox
            - Text
            - Delete Button
    - Footer
        - Pending (DEFAULT)
            - Radio Button
            - Count
        - Completed
            - Radio Button
            - Count
        - All
            - Radio Button
            - Count
        - Clear Button
        - Reactivate Button

# UX Walkthrough

1. BEGIN
1. Check localStorage
    1. BEGIN
    1. If data found
        1. READ localStorage into setState
    1. Else
        1. CREATE localStorage and initialize setState
    1. END localStorage READ/CREATE
1. App Render
    1. BEGIN
    1. Header/Title Bar
    1. Text Box
    1. To-Do Area (Conditional)
        1. Default View State // ACTIVE
    1. Footer Area
        1. Pending To-Dos (Active), with selected radio button and count
        1. Completed To-Dos with radio button and count
        1. All To-Dos with radio button and count
        1. Clear All Completed button
        1. Reset All to Active button
        1. STRETCH - Filter by GTD context
    1. END render
1. USE CASE: View Pending To-Do Items State = Pending (DEFAULT STATE)
    1. BEGIN
    1. READ To-Do Items Array
    1. MAP to active = true
    1. BUILD display array + checkbox + delete button
    1. RETURN display items
    1. UPDATE display (React re-render)
    1. END
1. USE CASE: View All Items / State = All
    1. BEGIN
    1. READ To-Do Items Array
    1. MAP to active = true && active = false
    1. BUILD display array + checkbox + delete button
    1. RETURN display items, active first then completed
    1. UPDATE display (React re-render)
    1. END
1. USE CASE: View Completed Items / State = Completed
    1. BEGIN
    1. READ To-Do Items Array
    1. MAP to active = false
    1. BUILD display array + checkbox + delete button (disabled)
        1. STRETCH - enable 're-activate' button?
    1. RETURN display items
    1. UPDATE display (React re-render)
    1. END
1. USE CASE: Add a New Item
    1. BEGIN
    1. READ incoming value from text box
    1. VALIDATE (no blanks allowed)
    1. ADD new item to array
    1. UPDATE local storage
    1. RETURN new display array
    1. UPDATE display (React re-render)
    1. END
1. USE CASE: Mark an Item Completed
    1. BEGIN
    1. FIND item in array
    1. SET active = false
    1. UPDATE local storage
    1. RETURN new display array
    1. UPDATE display (React re-render)
    1. END
1. USE CASE: Clear/Archive Completed Items
    1. BEGIN
    1. REMOVE all active = false items from array
    1. DELETE from localStorage
    1. RETURN new display array
    1. UPDATE display (React re-render)
    1. END
1. USE CASE: Re-Activate Completed Items
    1. BEGIN
    1. FILTER array for active = false
    1. CHANGE active = true
    1. UPDATE localStorage
    1. RETURN updated display array
    1. UPDATE display (React re-render)
    1. END