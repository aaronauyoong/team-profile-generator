const { Manager } = require('../lib/Manager');

// Insert test code here
describe(Manager, () => {
    // Test new Employee object
    it("will return a new 'Manager' object", () => {
        const manager = new Manager("Caetlyn", "1111-1111", "caetlyn@a.com", "77889900");
        expect(manager instanceof Manager).toEqual(true);
    });
    // Test getName()
    describe("getName()", () => {
        it("should return a new 'Manager' object with the name Caetlyn", () => {
            const manager = new Manager("Caetlyn", "1111-1111", "caetlyn@a.com", "77889900");
            expect(manager.getName()).toBe("Caetlyn");
        });
    });
    // Test getID()
    describe("getId()", () => {
        it("should return a new 'Manager' object with the ID 1111-1111", () => {
            const manager = new Manager("Caetlyn", "1111-1111", "caetlyn@a.com", "77889900");
            expect(manager.getId()).toBe("1111-1111");
        });
    });
    // Test getEmail()
    describe("getEmail()", () => {
        it("should return a new 'Manager' object with the email caetlyn@a.com", () => {
            const manager = new Manager("Caetlyn", "1111-1111", "caetlyn@a.com", "77889900");
            expect(manager.getEmail()).toBe("caetlyn@a.com");
        });
    });
    // Test getRole()
    describe("getRole()", () => {
        it("should return a new 'Manager' object with the role Manager", () => {
            const manager = new Manager("Caetlyn", "1111-1111", "caetlyn@a.com", "77889900");
            expect(manager.getRole()).toBe("Manager");
        });
    });
    // Test getOfficeNumber()
    describe("getOfficeNumber()", () => {
        it("should return a new 'Manager' object with the office number 77889900", () => {
            const manager = new Manager("Caetlyn", "1111-1111", "caetlyn@a.com", "77889900");
            expect(manager.getOfficeNumber()).toBe("77889900");
        });
    });
})
