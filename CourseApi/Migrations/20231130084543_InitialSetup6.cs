using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CourseApi.Migrations
{
    public partial class InitialSetup6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Enquiries",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Admissions",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Enquiries");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Admissions");
        }
    }
}
