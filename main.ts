document.getElementById('resume-form')?.addEventListener('submit', (event: Event) => {
    event.preventDefault();


    const nameInput = document.getElementById('name') as HTMLInputElement | null;
    const emailInput = document.getElementById('email') as HTMLInputElement | null;
    const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
    const remarksInput = document.getElementById('remarks') as HTMLTextAreaElement | null;
    const degreeInput = document.getElementById('degree') as HTMLInputElement | null;
    const institutionInput = document.getElementById('institution') as HTMLInputElement | null;
    const educationDurationInput = document.getElementById('education-duration') as HTMLInputElement | null;
    const additionalQualificationsInput = document.getElementById('additional-qualifications') as HTMLTextAreaElement | null;
    const companyInput = document.getElementById('company') as HTMLInputElement | null;
    const positionInput = document.getElementById('position') as HTMLInputElement | null;
    const workDurationInput = document.getElementById('work-duration') as HTMLInputElement | null;
    const workAdditionInput = document.getElementById('work-addition') as HTMLTextAreaElement | null;

    if (nameInput && emailInput && phoneInput && remarksInput && degreeInput && institutionInput && educationDurationInput && additionalQualificationsInput && companyInput && positionInput && workDurationInput && workAdditionInput) {
        
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const remarks = remarksInput.value;
        const degree = degreeInput.value;
        const institution = institutionInput.value;
        const educationDuration = educationDurationInput.value;
        const additionalQualifications = additionalQualificationsInput.value;
        const company = companyInput.value;
        const position = positionInput.value;
        const workDuration = workDurationInput.value;
        const workAddition = workAdditionInput.value;

        
        document.getElementById('display-name')!.innerText = name;
        document.getElementById('display-email')!.innerText = email;
        document.getElementById('display-phone')!.innerText = phone;
        document.getElementById('display-remarks')!.innerText = remarks;
        document.getElementById('display-degree')!.innerText = degree;
        document.getElementById('display-institution')!.innerText = institution;
        document.getElementById('display-education-duration')!.innerText = educationDuration;
        document.getElementById('display-additional-qualifications')!.innerText = additionalQualifications;
        document.getElementById('display-company')!.innerText = company;
        document.getElementById('display-position')!.innerText = position;
        document.getElementById('display-work-duration')!.innerText = workDuration;
        document.getElementById('display-work-addition')!.innerText = workAddition;
    }
});
