namespace Backend.Jwt
{
    public interface IJwtService
    {
        public string GenerateToken(string email);
    }
}