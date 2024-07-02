using Backend.Data;
using Backend.Jwt;
using Backend.Models;
using Backend.Repositories;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Добавление сервисов
builder.Services.AddControllers();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Your API", Version = "v1" });
});

builder.Services.AddScoped<ApplicationDbContext>();

builder.Services.AddScoped<IJwtService, JwtService>();
builder.Services.AddJwtAuthentication(builder.Configuration);

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<INoteRepository, NoteRepository>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    // Настройка SwaggerUI
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Your API V1");
    });
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
