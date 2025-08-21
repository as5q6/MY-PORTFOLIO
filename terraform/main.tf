// Terraform main configuration file

// Example: Netlify deployment
provider "netlify" {
  # Netlify provider setup (requires community provider)
}

resource "netlify_site" "portfolio" {
  name = "my-portfolio-site"
}

// Example: AWS S3 static site
provider "aws" {
  region = var.aws_region
}

resource "aws_s3_bucket" "portfolio" {
  bucket = var.s3_bucket_name
  acl    = "public-read"
  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

// Example: AWS EC2 instance
resource "aws_instance" "portfolio_server" {
  ami           = var.ec2_ami
  instance_type = var.ec2_instance_type
}
