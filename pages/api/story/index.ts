import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

// POST /api/post
// Required fields in body: story, postal
// Optional fields in body: email, twitter, phone
// Approved field is set to false by default

// TODO: Sanitization needed here for all fields!
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, content, postal, category } = req.body
  const result = await prisma.story.create({
    data: {
      title: title,
      content: content,
      postal: postal,
      category: category,
      // hard coded for now
      anonymous: true,
      contact: false,
    },
  })
  console.log(result)
  res.json(result)
}
