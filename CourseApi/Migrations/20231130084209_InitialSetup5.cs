using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CourseApi.Migrations
{
    public partial class InitialSetup5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "Courses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ModifiedBy",
                table: "Courses",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "ModifiedBy",
                table: "Courses");
        }
    }
}
