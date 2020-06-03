using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Migrations
{
    public partial class alterandonome : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Nome",
                table: "Usuarios",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Nome",
                table: "Usuarios",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
