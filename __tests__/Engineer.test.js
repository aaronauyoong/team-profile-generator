const { Engineer } = require('../lib/Engineer');

// Insert test code here
describe(Engineer, () => {
    // Test new Employee object
    it("will return a new 'Engineer' object", () => {
        const engineer = new Engineer("Ronnie", "2468-1357", "ronnie@a.com", "ronniegithub");
        expect(engineer instanceof Engineer).toEqual(true);
    });
    // Test getName()
    describe("getName()", () => {
        it("should return a new 'Engineer' object with the name Ronnie", () => {
            const engineer = new Engineer("Ronnie", "2468-1357", "ronnie@a.com", "ronniegithub");
            expect(engineer.getName()).toBe("Ronnie");
        });
    });
    // Test getID()
    describe("getId()", () => {
        it("should return a new 'Engineer' object with the ID 2468-1357", () => {
            const engineer = new Engineer("Ronnie", "2468-1357", "ronnie@a.com", "ronniegithub");
            expect(engineer.getId()).toBe("2468-1357");
        });
    });
    // Test getEmail()
    describe("getEmail()", () => {
        it("should return a new 'Engineer' object with the email ronnie@a.com", () => {
            const engineer = new Engineer("Ronnie", "2468-1357", "ronnie@a.com", "ronniegithub");
            expect(engineer.getEmail()).toBe("ronnie@a.com");
        });
    });
    // Test getRole()
    describe("getRole()", () => {
        it("should return a new 'Engineer' object with the role Engineer", () => {
            const engineer = new Engineer("Ronnie", "2468-1357", "ronnie@a.com", "ronniegithub");
            expect(engineer.getRole()).toBe("Engineer");
        });
    });
    // Test getGithub()
    describe("getGithub()", () => {
        it("should return a new 'Engineer' object with the github account ronniegithub", () => {
            const engineer = new Engineer("Ronnie", "2468-1357", "ronnie@a.com", "ronniegithub");
            expect(engineer.getGithub()).toBe("ronniegithub");
        });
    });
})