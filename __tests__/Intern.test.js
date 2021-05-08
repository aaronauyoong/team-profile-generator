const { Intern } = require('../lib/Intern');

// Insert test code here
describe(Intern, () => {
    // Test new Employee object
    it("will return a new 'Intern' object", () => {
        const intern = new Intern("Jun", "5678-1234", "jun@a.com", "Monash University");
        expect(intern instanceof Intern).toEqual(true);
    });
    // Test getName()
    describe("getName()", () => {
        it("should return a new 'Intern' object with the name Jun", () => {
            const intern = new Intern("Jun", "5678-1234", "jun@a.com", "Monash University");
            expect(intern.getName()).toBe("Jun");
        });
    });
    // Test getID()
    describe("getId()", () => {
        it("should return a new 'Intern' object with the ID 2468-1357", () => {
            const intern = new Intern("Jun", "5678-1234", "jun@a.com", "Monash University");
            expect(intern.getId()).toBe("5678-1234");
        });
    });
    // Test getEmail()
    describe("getEmail()", () => {
        it("should return a new 'Intern' object with the email ronnie@a.com", () => {
            const intern = new Intern("Jun", "5678-1234", "jun@a.com", "Monash University");
            expect(intern.getEmail()).toBe("jun@a.com");
        });
    });
    // Test getRole()
    describe("getRole()", () => {
        it("should return a new 'Intern' object with the role Intern", () => {
            const intern = new Intern("Jun", "5678-1234", "jun@a.com", "Monash University");
            expect(intern.getRole()).toBe("Intern");
        });
    });
    // Test getSchool()
    describe("getSchool()", () => {
        it("should return a new 'Intern' object with the school name Monash University", () => {
            const intern = new Intern("Jun", "5678-1234", "jun@a.com", "Monash University");
            expect(intern.getSchool()).toBe("Monash University");
        });
    });
})
