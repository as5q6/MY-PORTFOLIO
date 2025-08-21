// Terraform outputs

output "netlify_site_url" {
  value = netlify_site.portfolio.ssl_url
  description = "Netlify site URL."
}

output "s3_website_url" {
  value = aws_s3_bucket.portfolio.website_endpoint
  description = "S3 static website URL."
}

output "ec2_public_ip" {
  value = aws_instance.portfolio_server.public_ip
  description = "EC2 instance public IP."
}
