### Content Delivery Networks
As we are going to have quite a few assets, we decided to use Amazon Web Services to store and host our images. On S3, you create a bucket which is a container for objects stored in Amazon S3. You can then also use a region to opmize for latency and minimize costs.

S3 Files are private by default, which meant that we had to change the permission and this is done very easily by using the [AWS policy generator](https://awspolicygen.s3.amazonaws.com/policygen.html)

Once you've generated a policy, you can add this to your bucket in the permissions tab.


So initially we believed that this was nothing more than an Amazon version of dropbox and we were right. After further research we realised that Amazon S3 is just a storage tool and CDNs are something completely different.
The S3 bucket is a great place to put your files, but it still only lives in one place, which means that transferring your assets to someone on the other side of the world will be slow.


A CDN solves this problem by storing copies of your files all over the planet in lots of data centres, meaning that your files are physically close to your customers no matter where they are, increasing transfer speed and improving their experience. So Amazon's CDN service is called CloudFront which allows us to copy the contents of our S3 bucket everywhere we need.

More Info:https://learnetto.com/blog/tutorial-how-to-use-amazon-s3-and-cloudfront-cdn-to-serve-images-fast-and-cheap
### Google Maps Api
