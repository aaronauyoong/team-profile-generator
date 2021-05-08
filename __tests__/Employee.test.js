const { Employee } = require('../lib/Employee');

// Insert test code here
describe(Employee, () => {
    // Test new Employee object
    it("will return a new 'Employee' object", () => {
        const employee = new Employee("Aaron", "1234-5678", "aaron@a.com");
        expect(employee instanceof Employee).toEqual(true);
    });
    // Test getName()
    describe("getName()", () => {
        it("should return a new 'Employee' object with the name Aaron", () => {
          const employee = new Employee("Aaron", "1234-5678", "aaron@a.com");
          expect(employee.getName()).toBe("Aaron");
        });
    });
    // Test getID()
    describe("getId()", () => {
        it("should return a new 'Employee' object with the ID 1234-5678", () => {
          const employee = new Employee("Aaron", "1234-5678", "aaron@a.com");
          expect(employee.getId()).toBe("1234-5678");
        });
    });
    // Test getEmail()
    describe("getEmail()", () => {
        it("should return a new 'Employee' object with the email aaron@a.com", () => {
          const employee = new Employee("Aaron", "1234-5678", "aaron@a.com");
          expect(employee.getEmail()).toBe("aaron@a.com");
        });
    });
    // Test getRole()
    describe("getRole()", () => {
        it("should return a new 'Employee' object with the role Employee", () => {
          const employee = new Employee("Aaron", "1234-5678", "aaron@a.com");
          expect(employee.getRole()).toBe("Employee");
        });
    });
})