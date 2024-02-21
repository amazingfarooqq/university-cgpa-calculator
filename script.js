let courses = [];
let courseCounter = 1;

function addCourse() {
    const courseName = document.getElementById('courseName').value.trim();
    const creditHours = parseInt(document.getElementById('creditHours').value);
    const gpa = parseFloat(document.getElementById('gpa').value);

    if (creditHours && gpa) {
        const newCourse = {
            name: courseName || `Course ${courseCounter}`,
            creditHours: creditHours,
            gpa: gpa
        };
        courseCounter++

        courses.push(newCourse);
        updateCourseTable(newCourse);
        clearInputFields();

    } else {
        alert('Please fill in all fields.');
    }
}

function updateCourseTable(course) {
    const table = document.getElementById('courseTable');
    const newRow = table.insertRow(-1);
    newRow.innerHTML = `
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    ${course.name}
    </th>
    <td class="px-6 py-4">
    ${course.creditHours}
    </td>
    <td class="px-6 py-4">
    ${course.gpa}</
    </td>
</tr>
    `;
}

function clearInputFields() {

    document.getElementById('courseName').value = '';
    document.getElementById('creditHours').value = '1';
    document.getElementById('gpa').value = '2';
}

function calculateCGPA() {
    if (courses.length === 0) {
        alert('Please add at least one course.');
        return;
    }

    let totalCreditPoints = 0;
    let totalCreditHours = 0;

    for (let course of courses) {
        totalCreditPoints += course.gpa * course.creditHours;
        totalCreditHours += course.creditHours;
    }

    const cgpa = totalCreditPoints / totalCreditHours;
    const result = document.getElementById('result');

  
    result.innerHTML = `
    <table id="courseTable" class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Total Credit hours
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Grade
                        </th>
                        <th scope="col" class="px-6 py-3">
                            CGPA
                        </th>
                    </tr>
                </thead>
                <tbody>

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${totalCreditHours}
                </th>
                <td class="px-6 py-4">
                A
                </td>
                <td class="px-6 py-4">
                ${cgpa}
                </</td>
            </tr>
                </tbody>
            </table>
    `;
}
