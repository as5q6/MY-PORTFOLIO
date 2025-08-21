// Terraform variables

variable "aws_region" {
  description = "AWS region to deploy resources in."
  default     = "us-east-1"
}

variable "s3_bucket_name" {
  description = "Name of the S3 bucket for static site."
  default     = "my-portfolio-bucket"
}

variable "ec2_ami" {
  description = "AMI ID for EC2 instance."
  default     = "ami-0c55b159cbfafe1f0" // Example: Amazon Linux 2
}

variable "ec2_instance_type" {
  description = "EC2 instance type."
  default     = "t2.micro"
}
